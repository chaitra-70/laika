import "./LaunchCard.css";

function LaunchCard({ launch }) {
    return (
        <tr className="launch-row">

            <td>{launch.name}</td>

            <td>
                {launch.rocket?.configuration?.full_name}
            </td>

            <td>
                {launch.pad?.name}
            </td>

            <td>
                {launch.mission?.orbit?.name || "-"}
            </td>

            <td>
                {new Date(launch.net).toLocaleString()}
            </td>

        </tr>
    );
}

export default LaunchCard;