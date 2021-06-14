import connexion
import six

from swagger_server.models.new_private_message import NewPrivateMessage  # noqa: E501
from swagger_server.models.private_message import PrivateMessage  # noqa: E501
from swagger_server import util


def privatemessages_get(token, user_id, only_old_new=None):  # noqa: E501
    """Get private messages (already read/not read/all) from specific user

     # noqa: E501

    :param token: User token
    :type token: str
    :param user_id: ID of messages sender
    :type user_id: int
    :param only_old_new: Filter for (0) only read / (1) only unread messages / (null) all
    :type only_old_new: bool

    :rtype: List[PrivateMessage]
    """
    return 'do some magic!'


def privatemessages_lastmsgtime_get(token, user_id):  # noqa: E501
    """Get last private message send time in chat with specific user

     # noqa: E501

    :param token: User token
    :type token: str
    :param user_id: ID of messages sender/receiver
    :type user_id: int

    :rtype: datetime
    """
    return 'do some magic!'


def privatemessages_markread_patch(token, private_message_id):  # noqa: E501
    """Mark specific private message as already read

     # noqa: E501

    :param token: User token
    :type token: str
    :param private_message_id: ID of private message
    :type private_message_id: int

    :rtype: None
    """
    return 'do some magic!'


def privatemessages_numberofread_get(token, user_id):  # noqa: E501
    """Get number of unread private messages from specific user

     # noqa: E501

    :param token: User token
    :type token: str
    :param user_id: ID of messages sender
    :type user_id: int

    :rtype: int
    """
    return 'do some magic!'


def privatemessages_post(body, token):  # noqa: E501
    """Post new private message for specific user

     # noqa: E501

    :param body: Private message object that needs to be added to the system
    :type body: dict | bytes
    :param token: User token
    :type token: str

    :rtype: None
    """
    if connexion.request.is_json:
        body = NewPrivateMessage.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
