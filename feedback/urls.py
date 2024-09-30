from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MentorViewSet, MentoringViewSet, FeedbackViewSet, submit_feedback, FeedbackListByMentoringView

router = DefaultRouter()
router.register(r'mentors', MentorViewSet)
router.register(r'mentorings', MentoringViewSet)
router.register(r'feedbacks', FeedbackViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Inclui as rotas do router
    path('api/feedbacks/', submit_feedback, name='submit_feedback'),  # Endpoint para enviar feedback
    path('feedbacks/<int:mentoring_id>/', FeedbackListByMentoringView.as_view(), name='feedback-list-by-mentoring'),  # Endpoint para listar feedbacks por mentoring
]
