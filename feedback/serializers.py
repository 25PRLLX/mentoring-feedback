from rest_framework import serializers
from .models import Mentor, Mentoring, Feedback

class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = '__all__'

class MentoringSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentoring
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['id', 'name', 'mentoring', 'rating', 'description', 'created_at']
