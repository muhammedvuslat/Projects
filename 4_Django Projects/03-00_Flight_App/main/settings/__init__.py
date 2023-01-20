from .base import *

env_name = config("ENV_NAME")
if env_name == "prod":
    from .prod import *
if env_name == "dev":
    from .dev import *