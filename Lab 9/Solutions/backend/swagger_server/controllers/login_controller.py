import connexion
import six

from swagger_server.models.new_user import NewUser  # noqa: E501
from swagger_server import util
from swagger_server.tokens_handler import *
from swagger_server.database.sqlalchemy_declarative import Base, User

from sqlalchemy import *
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///messenger.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
SESSION = DBSession()


def login_post(login):  # noqa: E501
    """Login to system

    Logs the user to the system using login # noqa: E501

    :param login: User login
    :type login: str

    :rtype: str
    """
    try:
        user = SESSION.query(User).filter(User.login == login).one()
        return TOKENS_HANDLER.new_token_for_id(user.id)
    except Exception: 
        SESSION.rollback()
        return 'Login not found', 404


def logout_post(token):  # noqa: E501
    """Logout from the system

     # noqa: E501

    :param token: User token
    :type token: str

    :rtype: None
    """
    print(token)
    if TOKENS_HANDLER.delete_token(token) == True:
        return 200
    else:
        return 'Invalid token', 401


def register_post(body):  # noqa: E501
    """Register new user in system

    Register new user in system by creating new login and setting password # noqa: E501

    :param body: User object that needs to be added to the system
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = NewUser.from_dict(connexion.request.get_json())
        newDbUser = User(login=body.login, password=body.password)
        try:
            SESSION.add(newDbUser)
            SESSION.commit()
            return 'User created', 201
        except Exception: 
            SESSION.rollback()
            return 'That login already exists', 409
    else:
        return 'Invalid body', 400
