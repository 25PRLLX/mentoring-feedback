from rest_framework import generics, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Mentor, Mentoring, Feedback
from .serializers import MentorSerializer, MentoringSerializer, FeedbackSerializer

class MentorViewSet(viewsets.ModelViewSet):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer

class MentoringViewSet(viewsets.ModelViewSet):
    queryset = Mentoring.objects.all()
    serializer_class = MentoringSerializer

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

class FeedbackListByMentoringView(generics.ListAPIView):
    serializer_class = FeedbackSerializer

    def get_queryset(self):
        mentoring_id = self.kwargs['mentoring_id']
        return Feedback.objects.filter(mentoring__id=mentoring_id)

@api_view(['POST'])
def submit_feedback(request):
    serializer = FeedbackSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Feedback enviado com sucesso!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
