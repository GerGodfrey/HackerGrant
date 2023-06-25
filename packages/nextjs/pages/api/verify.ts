import type { NextApiRequest, NextApiResponse } from "next";
import { firebase } from "../../components/figma/api/firebase";
import { collection, addDoc } from "firebase/firestore";

export type Reply = {
	code: string
  }

export default function handler(req: NextApiRequest, res: NextApiResponse<Reply>) {
	const reqBody = {
		nullifier_hash: req.body.nullifier_hash,
		merkle_root: req.body.merkle_root,
		proof: req.body.proof,
		credential_type: req.body.credential_type,
		action: req.body.action,
		signal: req.body.signal,
	};

	fetch(`https://developer.worldcoin.org/api/v1/verify/app_fc30e6754b7a0020c89f355d629c169b`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(reqBody),
	}).then(async (verifyRes) => {
		const wldResponse = await verifyRes.json()
		if (verifyRes.status == 200) {
						
			console.log("acaaaaaaaaaaaaa")
			const ref = collection(firebase, "registro");
			try {
				const docRef = await addDoc(ref, {
					res
				});
				console.log("Document written with ID: ", docRef.id);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
			// This is where you should perform backend actions based on the verified credential, such as setting a user as "verified" in a database
			res.status(200).send({ code: wldResponse.code });

		} else {
			res.status(400).send({ code: wldResponse.code });
		}
	});
};