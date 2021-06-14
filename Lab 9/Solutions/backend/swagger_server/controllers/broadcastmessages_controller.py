import connexion
import six

from swagger_server.models.broadcast_message import BroadcastMessage  # noqa: E501
from swagger_server.models.new_broadcast_message import NewBroadcastMessage  # noqa: E501
from swagger_server import util


def broadcastmessages_get(token, only_old_new=None):  # noqa: E501
    """Get broadcast messages (already read/not read/all)

     # noqa: E501

    :param token: User token
    :type token: str
    :param only_old_new: Filter for (0) only read / (1) only unread messages / (null) all
    :type only_old_new: bool

    :rtype: List[BroadcastMessage]
    """
    return 'do some magic!'


def broadcastmessages_lastmsgtime_get(token):  # noqa: E501
    """Get last broadcast message send time

     # noqa: E501

    :param token: User token
    :type token: str

    :rtype: datetime
    """
    return 'do some magic!'


def broadcastmessages_markread_patch(token, broadcast_message_id):  # noqa: E501
    """Mark specific broadcast message as already read

     # noqa: E501

    :param token: User token
    :type token: str
    :param broadcast_message_id: ID of broadcast message
    :type broadcast_message_id: int

    :rtype: None
    """
    return 'do some magic!'


def broadcastmessages_numberofread_get(token):  # noqa: E501
    """Get number of unread broadcast messages

     # noqa: E501

    :param token: User token
    :type token: str

    :rtype: int
    """
    return 'do some magic!'


def broadcastmessages_post(body, token):  # noqa: E501
    """Post new broadcast message

     # noqa: E501

    :param body: Broadcast message object that needs to be added to the system
    :type body: dict | bytes
    :param token: User token
    :type token: str

    :rtype: None
    """
    if connexion.request.is_json:
        body = NewBroadcastMessage.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
