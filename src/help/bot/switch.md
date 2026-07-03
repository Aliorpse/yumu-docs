---
title: 控制模块开关
icon: sliders
order: 4
---

这个功能可以用于限制部分功能在部分群组内的可用状态。

超级管理员也可以用这个功能来限制部分违规用户（即旧版 super、ban 功能）。

::::: info 使用方法

!switch on / so ( ::phone:: 群组号/玩家号) ( ::robot:: 功能)

启用模块。

:::: tabs#switch

@tab ::phone:: 群组/玩家号#phone

可选。如果不填写，则视作全局关闭功能（仅超级管理员可用）

- 群组号：
  - 如果输入数字，默认为群组号。
  - 输入格式也可以为 `group=`114514。
- 玩家号：
  - 输入格式必须为 `qq=`114514。
  - 常规用户输入其他用户的玩家号无效（只能对自己操作）。

@tab:active ::robot:: 功能#robot

可选。可开关的功能名称，或是功能所属的模块名（一组功能）。

如果记不住功能名或者模块名，可以留空，或是随便填。Bot 会提示你。

::: details 模块对应表

| 模块 | 名称 | 简称 | 包含的功能内部区分名（部分） |
| :-: | :-: | :-: | --- |
| bot | 内部、机器 | o | help、ping、bind |
| scores | 成绩、分数 | s | set_mode、bp、score_pr、today_bp |
| player | 玩家、用户 | p | info、friend、mutual、pp_minus |
| beatmap | 谱面、图 | b | map、audio、explore、qualified_map |
| match | 比赛、房间 | m | mu_rating、match_now |
| chat | 聊天 | c | - |
| fun | 娱乐 | f | dice |
| maimai | 舞萌、中二 | i | mai_bp、mai_score、chu_bp |
| aid | 辅助 | a | old_avatar、take |
| custom | 自定 | u | custom |
| private | 私服 | e | sb_set_mode、sb_info、sb_bp、sb_score |

:::

::::

!switch off / sf ( ::phone:: 群组号/玩家号) ( ::robot:: 功能)

禁用模块。

:::: tabs#switch

@tab ::phone:: 群组/玩家号#phone

同上。

@tab:active ::robot:: 功能#robot

同上。

::::

:::: important 超管专属使用方法

!switch list / sl

查看模块状态。

::::

:::::

::: tip 提示

这个功能比较复杂，下面附带了一些用法。

- 例：我在群组 7355608，但我不想有人在这里使用舞萌模块的功能！
    - 您可以在群聊中输入：!sf maimai、或是 !sf 舞萌
        - 此时，Bot 会向您二次确认：要对自己操作还是对群聊操作。
        - 输入对应的数字（2）即确认为对群聊操作。
        - 除此之外，您也可以直接输入：!sf 7355608 maimai，直接指定需要操作的群聊。
    - 此时，Bot 会向您发送三次确认，并附带即将关闭的服务列表。
        - 输入 OK，即可关闭这些服务。
        - 输入其他任何消息，或是等待 30 秒，即可撤销操作。
    - 从此之后，除了超级管理员之外的所有用户，都无法使用这些功能了。

:::

::: caution 警告

一般来说，YumuBot 是免费，开放[^open]且包容的。但如果您滥用功能、言语攻击辱骂 Bot 及开发者，那么开发者将有权收回您使用 Bot 的一切权利。

:::

[^open]: [YumuBot 储存在 GitHub 上的仓库](https://github.com/yumu-bot)