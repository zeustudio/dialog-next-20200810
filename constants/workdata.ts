import FuminData from "./works/fumin";
import HazukiData from "./works/hazuki";
import HeejunData from "./works/heejun";
import KanaData from "./works/kana";
import OgaData from "./works/oga";
import OtoData from "./works/oto";
import ShinoguData from "./works/shinogu";
import TakuroData from "./works/takuro";
import UenaData from "./works/uena";

const WorkData = new Map();

WorkData.set("fumin", FuminData);
WorkData.set("hazuki", HazukiData);
WorkData.set("heejun", HeejunData);
WorkData.set("kana", KanaData);
WorkData.set("oga", OgaData);
WorkData.set("oto", OtoData);
WorkData.set("shinogu", ShinoguData);
WorkData.set("takuro", TakuroData);
WorkData.set("uena", UenaData);

export default WorkData;
