# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.broadcast_message import BroadcastMessage  # noqa: E501
from swagger_server.models.new_broadcast_message import NewBroadcastMessage  # noqa: E501
from swagger_server.test import BaseTestCase


class TestBroadcastmessagesController(BaseTestCase):
    """BroadcastmessagesController integration test stubs"""

    def test_broadcastmessages_get(self):
        """Test case for broadcastmessages_get

        Get broadcast messages (already read/not read/all)
        """
        query_string = [('only_old_new', true)]
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/broadcastmessages',
            method='GET',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_broadcastmessages_lastmsgtime_get(self):
        """Test case for broadcastmessages_lastmsgtime_get

        Get last broadcast message send time
        """
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/broadcastmessages/lastMsgTime',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_broadcastmessages_markread_patch(self):
        """Test case for broadcastmessages_markread_patch

        Mark specific broadcast message as already read
        """
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/broadcastmessages/{broadcastMessageId}/markAsRead'.format(broadcast_message_id=56),
            method='PATCH',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_broadcastmessages_numberofread_get(self):
        """Test case for broadcastmessages_numberofread_get

        Get number of unread broadcast messages
        """
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/broadcastmessages/numberOfUnread',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_broadcastmessages_post(self):
        """Test case for broadcastmessages_post

        Post new broadcast message
        """
        body = NewBroadcastMessage()
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/broadcastmessages',
            method='POST',
            data=json.dumps(body),
            headers=headers,
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
