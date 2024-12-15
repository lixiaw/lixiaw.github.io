var posts=["posts/112924948.html","posts/58040.html","posts/36828.html","posts/1.html","posts/2283170499.html","posts/3191522475.html","posts/2093750818.html","posts/3514809285.html","posts/3476997871.html","posts/2523616462.html","posts/2793256982.html","posts/3949140804.html","posts/32132.html","posts/771027640.html","posts/3547283958.html","posts/1912869324.html","posts/2330736325.html","posts/2799653326.html","posts/2449.html","posts/39461.html","posts/40292.html","posts/27676.html","posts/55211.html","posts/36072.html","posts/47517.html","posts/58484.html","posts/1101861431.html","posts/3710251633.html","posts/2195751293.html","posts/4180999211.html","posts/1679524416.html","posts/3281745452.html","posts/1186682027.html","posts/2381587848.html","posts/undefined.html","posts/2367571782.html","posts/398957599.html","posts/1042438465.html","posts/5202.html","posts/20998.html","posts/1088265238.html","posts/1307310440.html","posts/848468154.html","posts/3201044965.html","posts/5641.html","posts/3401762882.html","posts/894070943.html","posts/3603042123.html","posts/11858.html","posts/3578234425.html","posts/10752.html","posts/3825171924.html","posts/3727421477.html","posts/1935821925.html","posts/3535644329.html","posts/3650988435.html","posts/403508911.html","posts/614030322.html","posts/2064162257.html","posts/2221180745.html","posts/1344441017.html","posts/58218.html","posts/127297243.html","posts/1049213436.html","posts/4957.html","posts/53090.html","posts/56498.html","posts/3890420856.html","posts/4105091639.html","posts/54978.html","posts/1833036771.html","posts/631479017.html","posts/3790694111.html","posts/1504669193.html","posts/3888197865.html","posts/3664031404.html","posts/3119001658.html","posts/4001261760.html","posts/4001261761.html","posts/28332.html","posts/47127.html","posts/8928.html","posts/341007411.html","posts/48546.html","posts/29087.html","posts/545.html","posts/6812.html","posts/1154.html","posts/9986.html","posts/148629846.html","posts/4198577673.html","posts/2333665472.html","posts/2691633802.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };