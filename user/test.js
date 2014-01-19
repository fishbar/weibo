var weibo = require('../lib/weibo.js');

/*
db.users.insert({_id: 123, name: "test", prov: "zhejiang"}, function (err) {
  db.users.find({_id: 123}).toArray(function (err, data) {
    console.log('>>> find data', data);
  });
});
*/
function parseFans(data) {
  return data;
}
weibo.init({
  cookie: 'SINAGLOBAL=114311364013.70168.1386646103615; _s_tentry=login.sina.com.cn; Apache=2979503697715.6997.1388370513521; ULV=1388370513526:4:4:1:2979503697715.6997.1388370513521:1387615151254; UV5PAGE=usr512_93; UUG=usr1028; UV5=usrmdins311174; myuid=1523365437; SUB=ARzxITzIDLrasPeXWMbodcaa4F3BhArVBuFkK0YDvuzx7z%2Fc0ykC7tZs%2BgPDkVbKQOlOYx1Hd8vaNi5jfapwIwZUG61YCAoW8Q2j3qEtc3Pi; login_sid_t=1df38788ce9a64ae9ad52d03767bb379; SSOLoginState=1389972084; wvr=5; SUE=es%3Daf4b96f64229cd7f836cf4cc844cccf3%26ev%3Dv1%26es2%3D88db39931c8750a4aa222df7d8165010%26rs0%3DKRE266ezP0yI4fS7lRJWthJX9u%252Bt1ROulsAikpCUp%252BcQrqZKB%252BVnvfA0f4hbOxkVNS0MKhvG0VPjeqrXitV0ZsJ3GqoJp1DKixDc7%252F5HsHnbak9kmz9UZf18OloA2rAc0ZOi8lIQ%252B4%252FdYnST79r6Tat7bnc2Ex8eA%252Fta%252FsBRvVs%253D%26rv%3D0; SUP=cv%3D1%26bt%3D1390110517%26et%3D1390196917%26d%3Dc909%26i%3D08e5%26us%3D1%26vf%3D0%26vt%3D0%26ac%3D0%26st%3D0%26uid%3D1618171240%26name%3Dfishbar%2540sina.cn%26nick%3Dfishbar%26fmp%3D%26lcp%3D2014-01-17%252023%253A21%253A21; SUS=SID-1618171240-1390110517-JA-df5ni-2471e05b5f447874d4bfcad26a1b3fba; ALF=1392702517; SinaRot_wb_r_topic=75; WBStore=8d05b2d45893c0dd|undefined; UOR=www.vpsee.com,widget.weibo.com,blogread.cn'
});

weibo.fetchUserFans({uid: 2656274875, page: 1}, parseFans, function (err, data) {
  console.log(err, data);
});