---
title: 绑定玩家账号
icon: network-wired
order: 3
---

如果用户想要使用 Bot 的大多数功能，则必须至少绑定一个 osu! 玩家账号。

:::: info 使用方法

!bind / bi (`:` ::mug-saucer:: 操作) (::address-card:: 玩家名)

绑定玩家账号。

::: tabs

@tab ::mug-saucer:: 操作

只能输入 `f` 来附带绑定。

只有 Bot 配置里的 oauth2 对应的拥有者才可使用。

@tab:active ::address-card:: 玩家名

可选。只有不填玩家名，才可以使用 oauth2 绑定。==如果你是普通用户，则无需输入玩家名==。

这个参数主要供超级管理员使用，可以定向新增绑定关系。

:::

!unbind / ub (::address-card:: 玩家名)

解绑玩家账号。

::: tabs

@tab:active ::address-card:: 玩家名

可选。这个参数主要供超级管理员使用，可以定向解除绑定关系。

:::

::::

![绑定流程|711x200](https://yumemuzi.s-ul.eu/yumunext/i7NS0kFF)

::: warning 注意

为了与其他 Bot 的绑定指令区分，!bind 唤起 YumuBot 时，会需要玩家二次确认。

玩家看到提示，并再次发送 OK 确认，Bot 才会发送有效的绑定链接。

在此之前，如果普通玩家想解绑，需要 ::link:: [==联系开发者==](../../about/dev.md)，或是去 ::link:: [==个人主页/账户设置下的开放授权页面==](https://osu.ppy.sh/home/account/edit)，撤销 YuriMumu 的访问权限。

![撤销访问权限|685x144](https://yumemuzi.s-ul.eu/yumunext/eymofaln)

:::

```flow:preset

st=>start: 开始绑定|past:
e=>end: 绑定成功|future:
op1=>operation: 输入 !ymbind|past
op2=>operation: OK 确认|check
op3=>operation: 点击链接|current
op4=>operation: 授权|authorise
cond1=>condition: 是否重新绑定?|approved:
cond2=>condition: 是否登录账号
并授权?|authorized:
sub1=>subroutine: 绑定失败|failed

st->op1->cond1
cond1(yes)->op2
cond1(no)->sub1(right)->op1
op2->op3->cond2
cond2(yes)->op4
cond2(no)->sub1(right)->op1
op4->e

```