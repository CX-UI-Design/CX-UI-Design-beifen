<!--login-->
<template>
  <div class="front-content" id="login">
    <div class="contView">
      <div class="front-Logo">
        CX-UI
        <i>Design</i>
      </div>
      <el-form :model="loginForm" :rules="rules_login" ref="loginForm" class="demo-ruleForm">
        <!--用户名-->
        <el-form-item prop="account">
          <el-input type="account" v-model="loginForm.account" auto-complete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <!--记住密码/忘记密码/立即注册-->
        <!--<el-form-item prop="resource" class="handle">-->
        <!--<el-checkbox-group v-model="loginForm.remember" class="fl remember">-->
        <!--<el-checkbox label="记住密码" name="remember"></el-checkbox>-->
        <!--</el-checkbox-group>-->
        <!--</el-form-item>-->
        <!--登陆-->
        <el-form-item class="txtC">
          <el-button class="large-submit" type="primary" @click="submitForm('loginForm')" v-waves>登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import Cookies from 'js-cookie';
  import sw from '@/switch'
  import {loginByUsername} from '../../api/user/login';
  import {roleButtonList} from '../../api/role/role-button-list';

  export default {
    name: 'login',
    data() {
      return {
        //反重复提交开关
        submitSwitch: true,
        key: this.$store.state.user.key,
        loginForm: {
          username: '',
          password: '',
          remember: false,
        },
        rules_login: {
          username: [{required: true, message: '请输入用户名', trigger: 'change'}],
          password: [{required: true, message: '清输入密码', trigger: 'change'}]
        }
      };
    },
    created() {
      /**
       * loginAutoHandle
       * @param t
       * @param user
       * @param ps
       * @param bol
       */
      const loginAutoHandle = function (t, user, ps, bol) {
        t.loginForm.username = user;
        t.loginForm.password = ps;
        t.loginForm.remember = bol;
      };
      Cookies.get("autologin_username") && Cookies.get("autologin_password") ?
        loginAutoHandle(this, Cookies.get("autologin_username"), Cookies.get("autologin_password"), true) :
        loginAutoHandle(this, this.loginForm.username, this.loginForm.password, false);
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const loginparams = {
              'username': this.loginForm.username,
              'password': this.loginForm.password,
              'remember': this.loginForm.remember
            };
            loginByUsername(loginparams)
              .then(response => {
                this.$store.dispatch('Login', response.resultData);
                roleButtonList({}).then(response => {
                    this.$store.dispatch('setRoleButtonListHandle', response.resultData);
                    //弹出信息：登录成功
                    this.$message({
                      message: ' 登录成功，正在跳转...', type: 'success', duration: 800, showClose: true,
                      onClose: () => {
                        this.$router.push({path: '/home/dashboard'});
                      }
                    })
                  }
                ).catch(response => {
                  this.$message({message: '获取按钮权限列表失败', type: 'error'})
                });
              }).catch(response => {
              this.$message({message: '登录错误，请联系系统管理员', type: 'error'});
            });
          } else {
            this.$message({
              message: '你输入的密码和账户名不匹配,请重新输入',
              type: 'error'
            });
          }
        });
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  $base-size: 24px;
  $base-gap: 40px;
  $ipt-back: rgba(49, 70, 94, 0.9);
  $border-color: rgba(255, 255, 255, 0.1);
  #login {
    top: -60px;
    .handle {
      margin-bottom: 10px;
    }
    .el-input {
      .el-input__inner {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: $ipt-back !important;
        color: #ffffff !important;
        border-radius: 5px;
      }
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px $ipt-back inset;
      border: 1px solid rgba(255, 255, 255, .1) !important;
      color: #ffffff !important;

    }

    input[type=text]:focus, input[type=password]:focus, textarea:focus {
      -webkit-box-shadow: 0 0 0 1000px $ipt-back inset;
      border: 1px solid rgba(255, 255, 255, .1) !important;
      color: #ffffff !important;
    }
  }
</style>
