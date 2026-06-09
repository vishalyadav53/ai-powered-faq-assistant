from rest_framework import serializers
from .models import Todo
import re

class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = '__all__'

    def validate(self, validated_data):
        print(validated_data)

        if validated_data.get('todo_title'):
            todo_title = validated_data['todo_title']

            regex = re.compile(r'[@_!#$%^&*()<>?/\|}{~:]')

            if regex.search(todo_title):
                raise serializers.ValidationError(
                    'todo_title cannot contain special characters'
                )

        return validated_data