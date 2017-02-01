from django.contrib import admin
from .models import Comment


def make_visible(modeladmin, request, queryset):
    queryset.update(visible=True)
make_visible.short_description = "Mark selected comment as visible"


class CommentAdmin(admin.ModelAdmin):
    list_display = ('email', 'comment', 'visible')
    list_filter = ('visible',)
    actions = [make_visible]

admin.site.register(Comment, CommentAdmin)
