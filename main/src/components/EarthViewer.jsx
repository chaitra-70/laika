import { Viewer } from "resium";
import { Ion } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

Ion.defaultAccessToken = "";

export default function EarthViewer() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Viewer
        full
        animation={false}
        timeline={false}
        geocoder={false}
        homeButton={false}
        sceneModePicker={false}
        navigationHelpButton={false}
        fullscreenButton={false}
        baseLayerPicker={false}
      />
    </div>
  );
}