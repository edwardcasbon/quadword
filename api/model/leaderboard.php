<?php

class Model_Leaderboard extends Model {
    public function getLeaderboard () {
        return $this->db->query("
            SELECT scores.score, users.name
            FROM users, scores
            WHERE users.id = scores.user_id
            ORDER BY scores.score DESC
            LIMIT 10
        ");
    }
}