import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import MissionsList from "./components/MissionsList";
import { fetchMissions } from "./api/fetchMissions";

// mock fetchMissions
// const mockFetchMissions = jest.fn(); // for props functions only
jest.mock("./api/fetchMissions"); // () => { return new Promise() }

const missionsData = [
  {
    mission_name: "Thaicom",
    mission_id: "9D1B7E0",
    manufacturers: ["Orbital ATK"],
    payload_ids: ["Thaicom 6", "Thaicom 8"],
    wikipedia: "https://en.wikipedia.org/wiki/Thaicom",
    website: "http://www.thaicom.net/en/satellites/overview",
    twitter: "https://twitter.com/thaicomplc",
    description:
      "Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.",
  },
  {
    mission_name: "Telstar",
    mission_id: "F4F83DE",
    manufacturers: ["SSL"],
    payload_ids: ["Telstar 19V", "Telstar 18V"],
    wikipedia: "https://en.wikipedia.org/wiki/Telesat",
    website: "https://www.telesat.com/",
    twitter: null,
    description:
      "Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.",
  },
  {
    mission_name: "Iridium NEXT",
    mission_id: "F3364BF",
    manufacturers: ["Orbital ATK"],
    payload_ids: [
      "Iridium NEXT 1",
      "Iridium NEXT 2",
      "Iridium NEXT 3",
      "Iridium NEXT 4",
      "Iridium NEXT 5",
      "Iridium NEXT 6",
      "Iridium NEXT 7",
      "Iridium NEXT 8",
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Iridium_satellite_constellation",
    website: "https://www.iridiumnext.com/",
    twitter: "https://twitter.com/IridiumBoss?lang=en",
    description:
      "In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium's proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways.",
  },
];

// async/await
test("render without errors", async () => {
  // mock the resolved value of fetchMissions
  fetchMissions.mockResolvedValueOnce(missionsData);
  render(<App />);

  // assert there are no MissionsList

  // click on button
  userEvent.click(screen.getByRole("button", { name: /get data/i }));

  // assert that missions data is rendering
  // clicking the button results in an async call to an API
  // we need to WAIT for the data to come back before making assertions
  await waitFor(async () => await screen.findByText(/thaicom/i));

  expect(screen.getByText(/thaicom/i)).toBeInTheDocument();
});
