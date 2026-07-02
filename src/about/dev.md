---
title: 开发人员
icon: code
footer: Yumu Docs - 开发人员
copyright: false
order: 2
---

<VPCard
  title="Muziyami"
  desc="全干工程师 (Anything-Stack Engineer)<br />首席 Bug 孵化官 (Chief Bug Incubator / CBI)<br />野指针架构师 (Wild-Pointer Architect)<br />代码和人只要有一个能跑就行™保障专员<br />联系方式：QQ：1340691940"
  logo="https://a.ppy.sh/7003013"
  link="https://osu.ppy.sh/users/7003013"
  background="rgba(253,230,138,0.15)"
/>

<VPCard
  title="-Spring Night-"
  desc="主开发、后端、运维、部分功能设计<br />联系方式：QQ：2480557535"
  logo="https://a.ppy.sh/17064371"
  link="https://osu.ppy.sh/users/17064371"
  background="rgba(245,177,153,0.15)"
/>

<VPCard
  title="Shiratori (ZhongRen)"
  desc="Discord 功能开发<br />联系方式：QQ：732713726"
  logo="https://a.ppy.sh/6263426"
  link="https://osu.ppy.sh/users/6263426"
  background="rgba(253,230,138,0.15)"
/>

<VPCard
  title="n0000000000o"
  desc="百科维护<br />联系方式：QQ：1120180945"
  logo="https://a.ppy.sh/12215328"
  link="https://osu.ppy.sh/users/12215328"
  background="rgba(253,230,138,0.15)"
/>

<VPCard
  title="Dana Iclucia"
  desc="临时服务器运维<br />联系方式：QQ：2785719748"
  logo="https://a.ppy.sh/13184288"
  link="https://osu.ppy.sh/users/13184288"
  background="rgba(193,216,172,0.15)"
/>

<VPCard
  title="SIyuyuko"
  desc="产品、运维、网站前端<br />联系方式：QQ：3228981717"
  logo="https://a.ppy.sh/9794030"
  link="https://osu.ppy.sh/users/9794030"
  background="rgba(253,230,138,0.15)"
/>

<VPCard
  title="yang_12345"
  desc="猜歌功能开发<br />联系方式：QQ：1716437252"
  logo="https://a.ppy.sh/33804348"
  link="https://osu.ppy.sh/users/33804348"
  background="rgba(253,230,138,0.15)"
/>

<VPCard
  title="Truncle"
  desc="PPM 逻辑开发<br />联系方式：QQ：1968035918"
  logo="https://a.ppy.sh/14218879"
  link="https://osu.ppy.sh/users/14218879"
  background="rgba(253,230,138,0.15)"
/>

<script>
if (typeof document !== 'undefined') {
    function domLoading() {
        return !! document.querySelector(`a[href="https://osu.ppy.sh/users/17064371"]`);
    }
    function domLoaded(){
        const myCardDom = document.querySelector(`a[href="https://osu.ppy.sh/users/17064371"]`);
        myCardDom.style.zoom = 1.0;
        const keyframes = [
            {transform: 'rotate(0turn)'},
            {transform: 'rotate(1turn)'},
        ];
        const options = {
            duration: 300,
            iterations: Infinity,
        };
        let animate;
        myCardDom.addEventListener('mouseenter', () => animate = myCardDom.animate(keyframes, options));
        myCardDom.addEventListener('mouseleave', () => {
            myCardDom.style.transform = getComputedStyle(myCardDom).transform;
            animate.cancel();
        });
    }
    let max_time = 100;
    function loop() {
        if (domLoading()) {
            domLoaded();
            return;
        }
        if (max_time > 0) {
            max_time--;
            setTimeout(loop, 50);
        } else {
            console.log("loading time out");
        }
    }
    loop();
}
</script>