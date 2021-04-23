import { Circle } from "better-react-spinkit";

function loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-icone.png"
          alt=""
          height="200"
          style={{ marginBottom: 10 }}
        />
        <Circle color="#3CBC26" size={60} />
      </div>
    </center>
  );
}

export default loading;
