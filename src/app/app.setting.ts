export class AppSettings {

  // private static host :string = "http://192.168.64.2/file/";
  private static host :string = "http://192.168.0.105:8007/file/";

  public static USER_LOGIN = './api/auth/login';
  public static Need2FA = './api/auth/device/verify';

  public static ADMIN_ID = "admin-12s23dsk";





  public static GET_FILES_BY_USER = '';

  public static GET_FILES_BY_USER_API = '';

  public static GET_FILE_BY_ID_API = '';

  public static TOKEN_STORAGE = 'userKey';
  public static USER_KEY = 'userKey';

  public static EMAIL = 'email';
  public static DEVICE_ID = 'deviceId';
  public static DEVICE_KEY = 'deviceKey';

  public static FIRST_NAME_STORAGE = 'firstName';

  public static LAST_NAME_STORAGE = 'lastName';

  public static CART_ID_STORAGE = 'cartId';

  public static GET_FILE_BY_PATH_API = '';

  public static NO_IMAGE_API = '/assets/img/app/no-image.png';

  public static LEFT_KEY = 37;

  public static RIGHT_KEY = 39;

  public static ENTER_KEY = 13;

  public static DOWN_KEY = 40;


  // public static GET_IMAGE_BY_ID = './api/file/default/id';
  public static GET_IMAGE_BY_ID = './apifile/file/default/id';
  public static GET_IMAGE_BY_TOKEN ='./apifile/file/default/id?id=';
  public static DOWNLOAD_FILE = './apifile/file/default/download?id=';
  public static DELETE_FILE =  './apifile/file/default/delete';
  public static GET_USER_IMAGE = './apifile/file/default/get-by-user';
  public static GET_IMAGE_PATH = './apifile/file/default/index?path=';
  // public static UPLOAD_IMAGE = './apifile/file/default/upload';
  public static UPLOAD_IMAGE = './apifile';


  public static USER_LIST = './api/admins';
  public static CURRENCY_LIST = './api/currency/';
  public static CURRENCY_REWARD = './api/currency/reward/';
  public static CURRENCY_PREFERENCE = './api/currency/preferred/';

  public static CURRENCY_GROUP_LIST = './api/currency/group/';


}
