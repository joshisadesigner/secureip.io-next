import React, {useEffect} from "react";
import * as ReactDom from "react-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function GoogleMap(): JSX.Element {

  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  const GoogleMapWrapper: React.VFC = () => {
    return (
      <div id="map-Sip" className="map__location map__location_us animated slideInUp">
        <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} render={render}>
          <Map
            style={{ flexGrow: "1", height: "100%" }}
          />
        </Wrapper>
      </div>
    )
  }

  interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
  }

  const Map: React.FC<MapProps> = ({
                                     children,
                                     style,
                                     ...options
                                   }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
      if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
      }
    }, [ref, map]);

    // [START maps_react_map_component_return]
    return (
      <>
        <div ref={ref} style={style} />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // set the map prop on the child component
            return React.cloneElement(child, { map });
          }
        })}
      </>
    );
    // [END maps_react_map_component_return]
  };

  useEffect(function mount() {
    window.addEventListener("DOMContentLoaded", () => {
      ReactDom.render(<GoogleMapWrapper />, document.getElementById("map-Sip"));
    });
  });

  return (
    <GoogleMapWrapper />
  )
}