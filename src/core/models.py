from django.db import models


class Link(models.Model):
    name = models.CharField(max_length=32, blank=True)
    link = models.CharField(max_length=255)
    owner = models.UUIDField()

    def __str__(self):
        return self.name
