import dynamic from 'next/dynamic'
import type { NextPage } from "next";

const IDKitWidget = dynamic(() => import('@worldcoin/idkit')
.then(mod => mod.IDKitWidget), { ssr: false })


const Profile: NextPage = () => {
    return (
		//<div className={styles.container}>
        <div>
            <h2>
                holaaaaaa
            </h2>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
				<IDKitWidget
					//action="my_action"
					//signal="my_signal"
					//onSuccess={onSuccess}
					//handleVerify={handleProof}
					app_id="app_staging_78b89d7d43ea1ffad3adc9340fb3ce22"
					// walletConnectProjectId="get_this_from_walletconnect_portal"
				>
					{({ open }) => <button onClick={open}>Click me</button>}
				</IDKitWidget>
			</div>
		</div>
    )
}

export default Profile;


