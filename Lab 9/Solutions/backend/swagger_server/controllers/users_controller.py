import connexion
import six

from swagger_server.models.user import User  # noqa: E501
from swagger_server import util


def user_get(token, user_id):  # noqa: E501
    """Get informations about specific user

     # noqa: E501

    :param token: User token
    :type token: str
    :param user_id: ID of user to return
    :type user_id: int

    :rtype: User
    """
    return 'do some magic!'


def user_isactive_get(token, user_id):  # noqa: E501
    """Get availability status of specific user

     # noqa: E501

    :param token: User token
    :type token: str
    :param user_id: ID of user to return
    :type user_id: int

    :rtype: bool
    """
    return 'do some magic!'


def users_get(token):  # noqa: E501
    """Get informations about all users

     # noqa: E501

    :param token: User token
    :type token: str

    :rtype: List[User]
    """
    return 'do some magic!'
