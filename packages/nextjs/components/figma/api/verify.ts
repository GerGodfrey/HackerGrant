import type { NextApiRequest, NextApiResponse } from "next";

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
			res.status(200).send({ code: wldResponse.code });
			console.log("acaaaaaaaaaaaaa")
			// This is where you should perform backend actions based on the verified credential, such as setting a user as "verified" in a database

		} else {
			res.status(400).send({ code: wldResponse.code });
		}
	});
};