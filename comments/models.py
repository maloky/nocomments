from __future__ import unicode_literals

from django.db import models


class Comment(models.Model):

    email = models.EmailField()
    comment = models.TextField()
    article_hash = models.CharField(max_length=64)
    visible = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField()

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"

    def __unicode__(self):
        return self.email
