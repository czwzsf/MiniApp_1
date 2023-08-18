// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from "../../utils/util";

Page({
  data: {
    logs: [],
  },
  onLoad(opts: any) {
    this.setData({
      logs: (wx.getStorageSync("logs") || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log,
        };
      }),
      logcolor: opts.color || "blue",
    });
  },
});
