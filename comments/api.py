from rest_framework import viewsets, mixins
from .serializer import CommentSerializer

from .models import Comment


class CommentsViewSet(viewsets.GenericViewSet,
                      mixins.CreateModelMixin,
                      mixins.ListModelMixin):

    serializer_class = CommentSerializer
    queryset = Comment.objects.approved()
