import FuminData from "./works/fumin";
import HazukiData from "./works/hazuki";
import HeejunData from "./works/heejun";
import KanaData from "./works/kana";
import OgaData from "./works/oga";
import OtoData from "./works/oto";
import ShinoguData from "./works/shinogu";
import TakuroData from "./works/takuro";
import UenaData from "./works/uena";
import { WorkData, Author } from "./Types";

const workDataMap = new Map<Author, WorkData>([
  ["fumin", FuminData],
  ["hazuki", HazukiData],
  ["heejun", HeejunData],
  ["kana", KanaData],
  ["oga", OgaData],
  ["oto", OtoData],
  ["shinogu", ShinoguData],
  ["takuro", TakuroData],
  ["uena", UenaData],
]); //WorkDataはMapオブジェクトとして定義されます。作者名をキーにデータを検索することができます。

export default workDataMap;
