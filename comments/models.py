from __future__ import unicode_literals

from django.db import models


class Comment(models.Model):

    email = models.EmailField()
    name = models.CharField(max_length=32)
    comment = models.TextField()
    link = models.URLField()
    visible = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"

    def __unicode__(self):
        return self.email
