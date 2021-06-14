# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.user import User  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUsersController(BaseTestCase):
    """UsersController integration test stubs"""

    def test_user_get(self):
        """Test case for user_get

        Get informations about specific user
        """
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/users/{userId}'.format(user_id=56),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_isactive_get(self):
        """Test case for user_isactive_get

        Get availability status of specific user
        """
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/users/isActive/{userId}'.format(user_id=56),
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_users_get(self):
        """Test case for users_get

        Get informations about all users
        """
        headers = [('token', 'token_example')]
        response = self.client.open(
            '/users',
            method='GET',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
