function LaunchCard({ launch }) {
    return (
        <tr>
            <td>
                {
                    launch.launch_service_provider?.name
                }
            </td>
            <td>
                {launch.name}
            </td>
            <td>
                {
                    launch.rocket?.configuration?.full_name

                }
            </td>
            <td>
                {
                    new Date(
                        launch.net
                    ).toLocaleString()
                }
            </td>
            <td>
                {
                    launch.pad?.name
                }
            </td>
            <td>
                {
                    launch.status?.name
                }
            </td>
        </tr>
    );
}
export default LaunchCard;