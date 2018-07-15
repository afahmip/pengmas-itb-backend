from flask import request
from flask_restful import Resource
from Model import db, Activity, Lembaga, ActivitySchema

activities_schema = ActivitySchema(many=True)
activity_schema = ActivitySchema()

class ActivityResource(Resource):
    def get(self):
        activities = Activity.query.all()
        activities = activities_schema.dump(activities).data
        return {'status': 'success', 'data': activities}, 200
    
    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        data, errors = activity_schema.load(json_data)
        if errors:
            return {"status": "error", "data": errors}, 422
        lembaga_id = Lembaga.query.filter_by(id=data['lembaga_id']).first()
        if not lembaga_id:
            return {'status': 'error', 'message': 'corresponding lembaga not found'}, 400
        activity = Activity(
            lat = json_data['lat'],
            lng = json_data['lng'],
            name = json_data['name'],
            lembaga_id = json_data['lembaga_id']
        )

        db.session.add(activity)
        db.session.commit()

        result = activity_schema.dump(activity).data

        return {'status': 'success', 'data': result}, 201

class ActivitySingleResource(Resource):
    def get(self, id):
        try:
            activity = Activity.find_by_id(id)
        except:
            return {'error': 'An error occured'}, 500
        if not activity:
            return {'message': 'Activity does not exists'}, 400
        return activity.json()