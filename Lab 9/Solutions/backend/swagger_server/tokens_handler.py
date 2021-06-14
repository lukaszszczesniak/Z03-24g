from secrets import token_urlsafe

class TokensHandler:
    def __init__(self):
        self.tokens = {}

    def new_token_for_id(self, id: int):
        new_token = token_urlsafe(16)
        if new_token in self.tokens.keys():
            return new_token_for_id(id)
        else:
            self.tokens[new_token] = id
        return new_token

    def get_id_by_token(self, token: str):
        if token in self.tokens.keys():
            return self.tokens[token]
        else:
            return -1
    
    def delete_token(self, token: str):
        if token in self.tokens.keys():
            self.tokens.pop(token)
            return True
        else:
            return False


TOKENS_HANDLER = TokensHandler()