import Mock from 'mockjs';

const userMap = {
  userInfo: {
    resultCode: "200",
    resultMsg: "操作成功。",
    // resultData: /^[a-zA-Z0-9]{20}-[a-zA-Z0-9]{56}-[a-zA-Z0-9]{40}$/,
    resultData: {
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjEiLCJpYXQiOjE1MDg0NjMwNTh9.h-qB1AjtoKNv3mdYRuNTup4LEicNP1nG5JWcdGCxRfo',
      loginTime: new Date().getTime(),
      maxage: 180000,
      userId: 1,
      userName: '高仓雄',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: "I'm Admin",
      roles: [],
    }
  },
}

export default {
  loginByUserName: config => {
    return userMap.userInfo
  },
}
