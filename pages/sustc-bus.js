// pages/sustc-bus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    line_1_weekday_Str: `7:00 7:05 7:10 7:15 7:20 7:23 7:26 7:29 7:39 7:48 8:00 8:05 8:15 8:21 8:27 8:35
8:40 8:45 8:51 9:00 9:03 9:06 9:10 9:15 9:20 9:25 9:30 9:35 9:40 9:50 10:00
10:10 10:20 10:30 10:40 10:50 11:00 11:20 11:35 11:45 11:50 12:00 12:10
12:20 12:30 12:40 12:50 12:55 13:00 13:10 13:20 13:30 13:40 13:50 14:00
14:20 14:30 14:40 14:50 15:00 15:30 15:35 15:50 16:00 16:10 16:30 16:50
17:10 17:15 17:25 17:30 17:35 17:40 17:45 17:50 17:55 18:00 18:05 18:10
18:15 18:20 18:30 18:40 18:45 18:55 19:00 19:10 19:20 19:25 19:30 19:35
19:40 19:50 20:00 20:10 20:20 20:30 20:40 20:50 21:00 21:10 21:20 21:30
21:40 21:50 22:00 22:15 22:30 22:40`,
    line_1_weekday_reverse_Str: `7:20 7:25 7:30 7:40 7:46 7:50 8:00 8:05 8:10 8:15 8:20 8:25 8:32 8:36 8:42 8:45
8:50 8:55 9:00 9:05 9:10 9:15 9:20 9:25 9:30 9:40 9:50 10:00 10:10 10:20 10:30
10:40 10:50 11:00 11:10 11:20 11:30 11:40 11:50 12:00 12:10 12:20 12:30
12:40 12:45 12:55 13:00 13:10 13:20 13:40 13:50 14:00 14:05 14:10 14:20
14:30 14:40 14:50 15:00 15:20 15:40 15:45 15:55 16:00 16:10 16:30 16:50
17:00 17:10 17:20 17:30 17:40 17:50 18:00 18:10 18:20 18:30 18:35 18:50
19:00 19:10 19:20 19:30 19:40 19:50 20:00 20:10 20:20 20:30 20:50 21:00
21:20 21:30 21:50 22:00 22:15 22:45 23:00`,
    line_2_weekday_Str: `7:32 7:36 7:42 7:45 7:51 7:54 7:57 8:10 8:18 8:24 8:30 8:48 8:54 8:57 9:13 9:23
9:26 9:33 9:36 9:38 9:43 9:48 9:53 9:55 9:58 10:05 10:15 10:25 10:35 10:45
10:55 11:10 11:30 11:40 11:55 12:05 12:15 12:25 12:35 12:45 13:05 13:23
13:26 13:33 13:36 13:45 13:55 14:10 14:30 15:10 15:20 15:40 15:53 15:56
16:05 16:20 16:40 17:00 17:20 17:26 17:36 17:46 17:53 18:06 18:16 18:23
18:26 18:35 18:50 19:05 19:15`,
    line_2_weekday_reverse_Str: `7:35 7:43 7:55 8:13 8:22 8:28 8:34 8:38 8:48 8:57 9:03 9:13 9:33 9:35 9:43 9:46
9:53 9:56 10:03 10:06 10:15 10:25 10:35 10:45 10:55 11:05 11:15 11:25 11:35
11:45 11:55 12:05 12:15 12:25 12:33 12:36 12:50 13:05 13:15 13:25 13:33
13:36 13:45 13:53 13:56 14:15 14:25 14:35 14:45 14:55 15:10 15:30 15:50
16:03 16:06 16:20 16:40 17:10 17:20 17:35 17:45 17:55 18:05 18:13 18:16
18:23 18:26 18:40 19:05 19:15 19:25 19:35 19:45 19:55 20:05 20:25 20:45
20:55 21:03 21:10 21:40 21:53 21:56 22:10 22:30`,
    line_1_holiday_Str: `7:00 7:20 7:40 8:00 8:20 8:40 9:00 9:20 9:40 10:00 10:20 10:40 11:00 11:10
11:20 11:30 11:40 11:50 12:00 12:10 12:20 12:30 12:40 12:50 13:00 13:20
13:40 14:00 14:20 14:40 15:00 15:20 15:40 16:00 16:20 16:40 17:00 17:10
17:20 17:30 17:40 17:50 18:00 18:10 18:20 18:30 18:40 18:50 19:00 19:20
19:40 20:00 20:20 20:40 21:00 21:20 21:40 22:00`,
    line_1_holiday_reverse_Str: `7:20 7:40 8:00 8:20 8:40 9:00 9:20 9:40 10:00 10:20 10:40 11:00 11:10 11:20
11:30 11:40 11:50 12:00 12:10 12:20 12:30 12:40 12:50 13:00 13:20 13:40
14:00 14:20 14:40 15:00 15:20 15:40 16:00 16:20 16:40 17:00 17:10 17:20
17:30 17:40 17:50 18:00 18:10 18:20 18:30 18:40 18:50 19:00 19:20 19:40
20:00 20:20 20:40 21:00 21:20 21:40 22:00 22:20`,
    line_Zhiyuan_Str: `11:50 17:45`,
    line_1_weekday: {
      afterRun: [],
      running: [],
      preRun: []
    },
    line_1_weekday_reverse: {
      afterRun: [],
      running: [],
      preRun: []
    },
    line_2_weekday: {
      afterRun: [],
      running: [],
      preRun: []
    },
    line_2_weekday_reverse: {
      afterRun: [],
      running: [],
      preRun: []
    },
    line_1_holiday: {
      afterRun: [],
      running: [],
      preRun: []
    },
    line_1_holiday_reverse: {
      afterRun: [],
      running: [],
      preRun: []
    },
    line_Zhiyuan: {
      afterRun: [],
      running: [],
      preRun: []
    },
    duraOfLine1: 19,
    duraOfLine2: 14,
    duraOfLineZhi: 5,
    is_holiday: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      line_1_weekday: this.getSuitableTime(this.data.line_1_weekday_Str, this.data.duraOfLine1),
      line_1_weekday_reverse: this.getSuitableTime(this.data.line_1_weekday_reverse_Str, this.data.duraOfLine1),
      line_2_weekday: this.getSuitableTime(this.data.line_2_weekday_Str, this.data.duraOfLine2),
      line_2_weekday_reverse: this.getSuitableTime(this.data.line_2_weekday_reverse_Str, this.data.duraOfLine2),
      line_1_holiday: this.getSuitableTime(this.data.line_1_holiday_Str, this.data.duraOfLine1),
      line_1_holiday_reverse: this.getSuitableTime(this.data.line_1_holiday_reverse_Str, this.data.duraOfLine1),
      line_Zhiyuan: this.getSuitableTime(this.data.line_Zhiyuan_Str, this.data.duraOfLineZhi),
      is_holiday: this.judgeHoliday()
    });
  },
  /**
   * 将时刻表列表转换为字典，字典的三个key为已过去的最接近的班车；正在运行的班车；即将出发的班车
   */
  getSuitableTime: function(timeStr, duraOfBus) {
    let timetable = timeStr.split(/\s/);
    let timetableDic = {
      afterRun: [],
      running: [],
      preRun: []
    };
    // 获取当前时间
    let localTime = new Date();
    // 构建可以计算当前时间与时刻表差值的函数
    let calTimeDiff = function(locHour, locMin, tableTime) {
      let tableArr = tableTime.split(':');
      return (locHour - parseInt(tableArr[0])) * 60 + locMin - parseInt(tableArr[1]);
    }
    // 查找当前时间将出发的班车时刻
    let startIndex = 0,
        endIndex = timetable.length;
    let startRun = 0, 
        startRerun = timetable.length;
    while (startIndex < endIndex) {
      // 第一次班车时刻表时间+运行时间>当前时间，此时运行状态的第一个bus
      // 第一次班车时刻表时间>当前时间时，这时的班车是将出发状态
      let timeDiff = calTimeDiff(localTime.getHours(), localTime.getMinutes(), timetable[startIndex]);
      // 先判断运行状态再出发
      if (timeDiff < duraOfBus) {
        startRun = startIndex;
        while (true) {
          timeDiff = calTimeDiff(localTime.getHours(), localTime.getMinutes(), timetable[startIndex]);
          if (timeDiff < 0) {
            startRerun = startIndex;
            break;
          }
          startIndex++;
          if (startIndex == timetable.length) {
            startRerun++;
            break;
          }
        }
        break;
      }
      startIndex++;
      if (startIndex == endIndex) {
        return timetableDic;
      }
    }
    if (startRun == 0) {
      timetableDic.afterRun = [];
    } else {
      timetableDic.afterRun = [timetable[startRun-1]];
    }
    timetableDic.running = timetable.slice(startRun, startRerun);
    timetableDic.preRun = timetable.slice(startRerun, startRerun+4);
    return timetableDic;
  },

  /**
   * 判断是否节假日
   */
  judgeHoliday: function() {
    // 假期
    let holiday = `2/11 2/12 2/15 2/16 2/17 4/5 5/3 5/4 5/5 6/14 9/20 9/21 10/1 10/4 10/5 10/6 10/7`.split('');
    // 调休时间
    let weekendToWeekday = `4/25 5/8 9/18 9/26 10/9`.split(' ');
    let locTime = new Date();
    let locMonth = locTime.getMonth(),
        locDate = locTime.getDate(),
        locWeek = locTime.getDay();
    let locDay = String(locMonth) + '/' + String(locDate);
    if (locWeek == 0 || locWeek == 6) {
      if (locDay in weekendToWeekday) {
        return false;
      }
      return true;
    }
    if (locDay in holiday) {
      return true;
    }
    return false;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})