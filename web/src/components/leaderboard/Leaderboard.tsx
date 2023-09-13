import React from "react";
import { ILeader } from "../../types/leaderboard/leader";

export default function Leaderboard({ leaders }: { leaders: ILeader[] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {leaders.map((leader: ILeader, index: number) => (
                    <tr key={index}>
                        <td>{leader.name}</td>
                        <td>{leader.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
