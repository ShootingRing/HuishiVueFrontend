<template>
  <div class="in-main">
    <div class="header">
      <span class="demonstration">Information</span>
    </div>
    <div class="in-content">
      <div class="message-box" :class="{ 'selected': selectedIndex == index }"
        v-for="(item, index) in truncatedNotifications" :key="index" @click="selectItem(index)">
        <div class="information">
          <div class="time">
            {{ item.time }}
          </div>
          <div class="from">
            {{ item.from }}
          </div>
        </div>
        <div class="info-header">
          {{ item.title }}
        </div>
        <div class="tips">
          {{ item.message_short }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"

/*
*

关于转发《第十一届中国金属学会青年学术年会征文通知》的通知
关于组织申报2022年度国家社科基金冷门绝学研究专项的通知
转发《关于公布第十三届湖南省高等教育教学成果奖获奖项目的通知》
关于开展我校2022年度湖南省普通高校青年骨干教师培养工作的通知
关于开展国家智慧教育公共服务平台用户使用满意度调查的通知


* */

const notifications = ref([
  {
    message: '为充分发挥学会优势资源，探索创新青年科技人才选拔培养机制，加强对材料行业青年科技人才的支持和培养，在以往工作基础上，中国材料研究学会拟继续开展中国科协“青年人才托举工程”相关工作。经评选最终入选中国科协青年人才托举的人才将获得每年15万元资助，每年度考核评价合格者将连续获得三年资助。',
    from: '科研部',
    title: '转发《关于开展中国材料研究学会（2021-2023年度）“青年人才托举工程”候选人推荐工作的通知》',
    time: '2021-01-01'
  },
  { message: '<br /><br />关于转发《第十一届中国金属学会青年学术年会征文通知》的通知', from: '科研部', title: '关于转发《第十一届中国金属学会青年学术年会征文通知》的通知', time: '2021-01-01' },
  { message: '<br /><br />关于组织申报2022年度国家社科基金冷门绝学研究专项的通知', from: '科研部', title: '关于组织申报2022年度国家社科基金冷门绝学研究专项的通知', time: '2021-01-01' },
  { message: '<br /><br />“铭记红色党史校史凝聚青春奉献力量"青春纪念日九—八专题活动预告', from: '团委部', title: '“铭记红色党史校史凝聚青春奉献力量"青春纪念日九—八专题活动预告', time: '2021-01-01' },
  { message: '<br /><br />关于以项目资助形式推动高水平智库建设和激励高水平智库研究成果产出的通知 ', from: '科研部', title: '关于以项目资助形式推动高水平智库建设和激励高水平智库研究成果产出的通知 ', time: '2021-01-01' },
  { message: '<br /><br />关于转发《科技部办公厅关于开展颠覆性技术研发方向建议征集工作的通知》的通知', from: '科研部', title: '关于转发《科技部办公厅关于开展颠覆性技术研发方向建议征集工作的通知》的通知', time: '2021-01-01' },
  { message: '<br /><br />关于开展落实《深化新时代教育评价改革总体方案》有关事项自查自纠的通知', from: '科研部', title: '关于开展落实《深化新时代教育评价改革总体方案》有关事项自查自纠的通知', time: '2021-01-01' },
  { message: '<br /><br />根据《关于建设年度进展报告的通知》（教研司〔2018〕10号）的要求', from: '科研部', title: '关于发布《建设2018年度进展报告》的公告', time: '2021-01-01' },
  { message: '<br /><br />根据《国务院关于印发统筹推进世界一流实验室》', from: '科研部', title: '关于发布《世界一流实验室建设方案》的公告', time: '2021-01-01' },
  { message: '<br /><br />关于开展国家智慧教育公共服务平台用户使用满意度调查的通知', from: '科研部', title: '关于开展国家智慧教育公共服务平台用户使用满意度调查的通知', time: '2021-01-01' },

]
)

const truncatedNotifications = computed(() => {
  return notifications.value.map((item) => {
    item.message_short = item.message.length > 18 ? item.message.slice(12, 100) + '...' : item.message
    item.title_short = item.title.length > 12 ? item.title.slice(0, 12) + '...' : item.title
    return item
  })
})

// onMounted(() => {
//   data.forEach((item) => {
//     updateNotifications(item)
//   })
// })

//select
const selectedNotification = ref(notifications.value[0])

const selectedIndex = ref(0)
const selectItem = (index) => {
  selectedIndex.value = index
  selectedNotification.value = notifications.value[index]
  console.log(selectedIndex.value)
}

//test message
const testMessage = ref(
  '\n\n' +
  '为充分发挥学会优势资源，探索创新青年科技人才选拔培养机制，加强对材料行业青年科技人才的支持和培养，在以往工作基础上，中国材料研究学会拟继续开展中国科协“青年人才托举工程”相关工作。经评选最终入选中国科协青年人才托举的人才将获得每年15万元资助，每年度考核评价合格者将连续获得三年资助。\n' +
  '\n' +
  '现将中国材料研究学会第七届（2021-2023年度）“青年人才托举工程”项目申报工作有关事项通知如下。\n' +
  '\n' +
  '一、项目背景\n' +
  '\n' +
  '中国科协“青年人才托举工程”，旨在探索、创新青年科技人才的选拔培养机制，促进优秀青年科技人才脱颖而出，打造国家高层次科技创新人才后备队伍，成为建设创新型国家实现中国梦的重要人力资源保障。\n' +
  '\n' +
  '本项目采用以奖代补、稳定支持的方式，大力扶持有较大创新能力和发展潜力的32岁以下青年科技人才。资助对象为坚持面向世界科技前沿、面向经济主战场、面向国家重大需求、面向人民生命健康，提升代表性和针对性，重点关注在关键共性技术、前沿引领技术、现代工程技术、颠覆性技术、关键核心技术等方面潜心研究、守正创新的青年科技工作者；积极投身国家重大战略部署的青年科技工作者；为推动科技与经济融合发展作出积极贡献的青年科技工作者；在国内开展学术研究取得突出成绩、在国内期刊发表高水平研究成果等的青年科技工作者。\n' +
  '\n' +
  '二、申报条件：\n' +
  '\n' +
  '1、年龄32岁（1989年6月30日以后出生）以下青年科技工作者，女性年龄可适当放宽1~2岁，需报中国科协同意；\n' +
  '\n' +
  '2、在中华人民共和国境内工作的中国籍公民；\n' +
  '\n' +
  '3、材料领域的基层一线科技工作者；\n' +
  '\n' +
  '4、具有创新、求实、协作、奉献的科学精神和优秀的学风道德；\n' +
  '\n' +
  '5、具有坚实的理论基础、较强的创新能力、良好的科研潜质；\n' +
  '\n' +
  '6、未曾入选本项目或优青、青年拔尖、青年长江、青年千人等国家级人才项目；人力资源和社会保障部博士后创新人才支持计划、留学回国人员创业启动支持计划入选者和其他国家级人才计划入选者，不作为遴选对象。\n' +
  '\n' +
  '7、须为中国材料研究学会个人会员（个人会员入会程序请至学会官网：www.c-mrs.org.cn-会员天地-入会须知中查询）。\n' +
  '\n' +
  '三、项目考核\n' +
  '\n' +
  '被托举人需接受年度检查评估，并按要求提供科研成果、绩效考核报告等相关书面材料。\n' +
  '\n' +
  '四、申报要求\n' +
  '\n' +
  '1、申请人可通过同行专家实名推荐、单位推荐、青年科技工作者自荐等途径申报；\n' +
  '\n' +
  '2、每位被托举人推荐人选应由不少于3名同行专家进行评议并具名同意推荐，其中至少2名专家与被托举人具有相同研究领域，至少1名专家作为托举导师团队成员；\n' +
  '\n' +
  '3、按照要求填写“青年人才托举工程候选人申报书”（见附件1），纸质版一式一份寄送至中国材料研究学会（北京市海淀区紫竹院路62号4102室），同时电子版发送至学会秘书处邮箱chinese_mrs@163.com；\n' +
  '\n' +
  '4、中国科协资助名额有限，如同意自筹资金联合培养青年人才的项目申报单位，须按科协要求提供资助协议、文件、资金到账明细等有效证明材料；获得中国科协批准的自筹培养青年人才将同样被授予中国科协青年托举人才证书；\n' +
  '\n' +
  '5、截止时间：10月10日17:00前。\n' +
  '\n' +
  '五、联系方式：\n' +
  '\n' +
  '中南大学科研部\n' +
  '\n' +
  '联系人：黄丽花\n' +
  '\n' +
  '联系电话：88876073、13723872039\n' +
  '\n' +
  '联系邮箱：kxb@csu.edu.cn\n' +
  '\n' +
  '中国材料研究学会秘书处\n' +
  '\n' +
  '联系人：张老师 贾老师\n' +
  '\n' +
  '联系电话：010-68475052   010-68710443\n' +
  '\n' +
  '邮箱：chinese_mrs@163.com\n' +
  '\n' +
  ' \n' +
  '\n' +
  '附件1：青年人才托举工程候选人申报书')

// 将\n替换为换行符
testMessage.value = testMessage.value.replace(/\n/g, '<br />')
notifications.value[0].message = testMessage.value
</script>

<style scoped lang="less">
.in-main {
  height: 100%;
}

.in-content {
  margin: 3.5% 5%;
  width: 90%;
  // display: flex;
  // justify-content: center;
  // align-items: flex-start;
  // flex-direction: column;
}

.message-box {
  width: 100%;
  height: 10%;

  margin-top: 30px;
  /*border-bottom: #13B5B1 1px solid;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: black;
  cursor: pointer;

  .information {
    display: flex;
    flex-direction: row;

    width: 90%;

    justify-content: space-between;
  }
  
  .info-header {
    width: 90%;
    color: #023760;

    font-size: 25px;
    line-height: 1.2em;
    font-weight: bolder;

    text-align: left;
  }

  .tips {
    font-family: Raleway,sans-serif;
    line-height: 2.0rem;

    font-size: 15px;

    width: 90%;

    text-align: left;

    margin-top: 20px;
  }
}

.time {
  text-align: left;
  font-size: small;
  color: #023760;
  display: inline-block;
  padding-bottom: .4rem;
  margin-bottom: .8rem;
  border-bottom: 4px solid #f53c3c;
  /*border: #13B5B1 1px solid;*/
}

.from {
  color: #023760;
  display: inline-block;
  padding-bottom: .4rem;
  margin-bottom: .8rem;
  border-bottom: 4px solid #f53c3c;
}
</style>
