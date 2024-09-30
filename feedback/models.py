from django.db import models

class Mentor(models.Model):
    name = models.CharField(max_length=255)
    expertise = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Mentoring(models.Model):
    mentor = models.ForeignKey(Mentor, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField()

    def __str__(self):
        return self.title

class Feedback(models.Model):
    name = models.CharField(max_length=255)
    mentoring = models.ForeignKey(Mentoring, on_delete=models.CASCADE)
    rating = models.IntegerField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'{self.mentoring.title} - {self.rating}'
