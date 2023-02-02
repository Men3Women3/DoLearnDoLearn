import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { SMain } from "./styles";
import LectureModal from "../LectureModal";

const UnScheduleLectureItem = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <SMain onClick={handleOpen}>
        <div className="main__container">
          <div className="lecture-info__section">
            <p>
              <FontAwesomeIcon icon={faCalendarDays} />
              &nbsp;{data.startTime} ~ {data.endTime}
            </p>
            <span>{data.title}</span>
          </div>
          {/* <div className="host__section">
            <img src={data.profileImg.profileImg} />
            <span>{data.host}</span>
          </div> */}
        </div>
      </SMain>
      {open ? (
        <LectureModal
          data={data}
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
        />
      ) : null}
    </>
  );
};

export default UnScheduleLectureItem;
