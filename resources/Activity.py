from flask import request
from flask_restful import Resource
from Model import db, Activity, ActivitySchema

activities_schema = ActivitySchema(many=True)
activity_schema = ActivitySchema()

class ActivityResource(Resource):
    def get(self):
        activities = Activity.query.all()
        activities = activities_schema.dump(activities).data
        return {'status': 'success', 'data': activities}, 200
    
    def post(self):
        json_data = request.json_daa(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        activity, errors = activity_schema.load(json_data)
        if errors:
            return errors, 422
        activity = Activity(
            lat = json_data['lat'],
            lng = json_data['lng'],
            lembaga_id = json_data['lembaga_id']
        )

        db.session.add(activity)
        db.session.commit()

        result = activity_schema.dump(activity).data

        return {'status': 'success', 'data': result}, 201