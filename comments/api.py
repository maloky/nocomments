from rest_framework import viewsets
from .serializer import CommentSerializer

from .models import Comment


class CommentsViewSet(viewsets.ModelViewSet):

    serializer_class = CommentSerializer
    queryset = Comment.objects.approved()
