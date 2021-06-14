# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.new_private_message import NewPrivateMessage  # noqa: E501
from swagger_server.models.private_message import PrivateMessage  # noqa: E501
from swagger_server.test import BaseTestCase


class TestPrivatemessagesController(BaseTestCase):
    """PrivatemessagesController integration test stubs"""

    def test_privatemessages_get(self):
        """Test case for privatemessages_get

        Get private messages (already read/not read/all) from specific user
        """
        query_string = [('only_old_new', true)]
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/privatemessages/{userId}'.format(user_id=56),
            method='GET',
            headers=headers,
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_privatemessages_lastmsgtime_get(self):
        """Test case for privatemessages_lastmsgtime_get

        Get last private message send time in chat with specific user
        """
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/privatemessages/{userId}/lastMsgTime'.format(user_id=56),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_privatemessages_markread_patch(self):
        """Test case for privatemessages_markread_patch

        Mark specific private message as already read
        """
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/privatemesages/{privateMessageId}/markAsRead'.format(private_message_id=56),
            method='PATCH',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_privatemessages_numberofread_get(self):
        """Test case for privatemessages_numberofread_get

        Get number of unread private messages from specific user
        """
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/privatemessages/{userId}/numberOfUnread'.format(user_id=56),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_privatemessages_post(self):
        """Test case for privatemessages_post

        Post new private message for specific user
        """
        body = NewPrivateMessage()
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/privatemessages',
            method='POST',
            data=json.dumps(body),
            headers=headers,
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
