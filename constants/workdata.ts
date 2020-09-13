import FuminData from "./works/fumin";
import HazukiData from "./works/hazuki";
import HeejunData from "./works/heejun";
import KanaData from "./works/kana";
import OgaData from "./works/oga";
import OtoData from "./works/oto";
import ShinoguData from "./works/shinogu";
import TakuroData from "./works/takuro";
import UenaData from "./works/uena";
import { WorkData, Authors } from "./Types";

const workDataMap = new Map<Authors, WorkData>(); //WorkDataはMapオブジェクトとして定義されます。作者名をキーにデータを検索することができます。

workDataMap.set("fumin", FuminData);
workDataMap.set("hazuki", HazukiData);
workDataMap.set("heejun", HeejunData);
workDataMap.set("kana", KanaData);
workDataMap.set("oga", OgaData);
workDataMap.set("oto", OtoData);
workDataMap.set("shinogu", ShinoguData);
workDataMap.set("takuro", TakuroData);
workDataMap.set("uena", UenaData);

export default workDataMap;
