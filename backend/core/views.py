from rest_framework import viewsets
from .models import Member
from .serializers import MemberSerelializer,  MemberSimplesSerializer
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerelializer
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [ IsAuthenticated,]

    def list(self, request, *args, **kwargs):
        queryset = Member.objects.all()
        serializer = MemberSimplesSerializer(queryset, many=True)
        return Response(serializer.data)
