CREATE TABLE user 
( 
 email VARCHAR(n),  
 password VARCHAR(n),  
 id INT PRIMARY KEY,  
); 

CREATE TABLE profile 
( 
 profileSelfie VARCHAR(n),  
 description VARCHAR(n),  
 id INT PRIMARY KEY,  
 name VARCHAR(n),  
 birthdate DATE,  
 gender VARCHAR(n),  
 userId INT,  
); 

CREATE TABLE community 
( 
 name VARCHAR(n),  
 type VARCHAR(n),  
 password VARCHAR(n),  
 profileId INT,  
 id INT PRIMARY KEY,  
); 

CREATE TABLE community_creator 
( 
 id INT PRIMARY KEY,  
 profileId INT,  
 idcommunity INT,  
); 

CREATE TABLE community_moderator 
( 
 id INT PRIMARY KEY,  
 ProfileId INT,  
 communityId INT,  
); 

CREATE TABLE post 
( 
 id INT PRIMARY KEY,  
 profileId INT,  
 status VARCHAR(n),  
 title VARCHAR(n),  
 description VARCHAR(n),  
 content VARCHAR(n),  
 communityId INT,  
); 

CREATE TABLE comment 
( 
 id INT PRIMARY KEY,  
 communityId INT,  
 profileId INT PRIMARY KEY,  
 content VARCHAR(n),  
 postId INT,  
); 

CREATE TABLE likes 
( 
 id INT PRIMARY KEY,  
 communityId INT,  
 profileId INT,  
 postId INT,  
); 

CREATE TABLE comment_reply 
( 
 content VARCHAR(n),  
 postId INT PRIMARY KEY,  
 profileId INT,  
 communityId INT,  
 id INT PRIMARY KEY,  
 commentId INT,  
); 

CREATE TABLE comment_likes 
( 
 id INT PRIMARY KEY,  
 communityId INT,  
 profileId INT,  
 postId INT,  
 commentId INT,  
); 

CREATE TABLE member 
( 
 profileId INT PRIMARY KEY,  
 id INT,  
); 

CREATE TABLE staff 
( 
 profileId INT PRIMARY KEY,  
 id INT PRIMARY KEY,  
); 

CREATE TABLE publication 
( 
 profileId INT PRIMARY KEY,  
 id INT,  
); 

CREATE TABLE reply 
( 
 id INT PRIMARY KEY,  
 id INT,  
); 

CREATE TABLE rating 
( 
 id INT PRIMARY KEY,  
 id INT,  
); 

CREATE TABLE assessment 
( 
 id INT PRIMARY KEY,  
 id INT,  
); 

CREATE TABLE dialog 
( 
 id INT PRIMARY KEY,  
 postId INT,  
); 

ALTER TABLE profile ADD FOREIGN KEY(userId) REFERENCES user (userId)
ALTER TABLE community ADD FOREIGN KEY(profileId) REFERENCES undefined (profileId)
ALTER TABLE community_creator ADD FOREIGN KEY(profileId) REFERENCES undefined (profileId)
ALTER TABLE community_creator ADD FOREIGN KEY(idcommunity) REFERENCES community (idcommunity)
ALTER TABLE community_moderator ADD FOREIGN KEY(ProfileId) REFERENCES undefined (ProfileId)
ALTER TABLE community_moderator ADD FOREIGN KEY(communityId) REFERENCES undefined (communityId)
ALTER TABLE post ADD FOREIGN KEY(profileId) REFERENCES undefined (profileId)
ALTER TABLE post ADD FOREIGN KEY(communityId) REFERENCES undefined (communityId)
ALTER TABLE comment ADD FOREIGN KEY(communityId) REFERENCES undefined (communityId)
ALTER TABLE comment ADD FOREIGN KEY(postId) REFERENCES undefined (postId)
ALTER TABLE likes ADD FOREIGN KEY(communityId) REFERENCES undefined (communityId)
ALTER TABLE likes ADD FOREIGN KEY(profileId) REFERENCES undefined (profileId)
ALTER TABLE likes ADD FOREIGN KEY(postId) REFERENCES undefined (postId)
ALTER TABLE comment_reply ADD FOREIGN KEY(profileId) REFERENCES undefined (profileId)
ALTER TABLE comment_reply ADD FOREIGN KEY(communityId) REFERENCES undefined (communityId)
ALTER TABLE comment_reply ADD FOREIGN KEY(commentId) REFERENCES undefined (commentId)
ALTER TABLE comment_likes ADD FOREIGN KEY(communityId) REFERENCES undefined (communityId)
ALTER TABLE comment_likes ADD FOREIGN KEY(profileId) REFERENCES undefined (profileId)
ALTER TABLE comment_likes ADD FOREIGN KEY(postId) REFERENCES undefined (postId)
ALTER TABLE comment_likes ADD FOREIGN KEY(commentId) REFERENCES undefined (commentId)
ALTER TABLE member ADD FOREIGN KEY(profileId) REFERENCES community (profileId)
ALTER TABLE member ADD FOREIGN KEY(id) REFERENCES profile (id)
ALTER TABLE staff ADD FOREIGN KEY(profileId) REFERENCES community (profileId)
ALTER TABLE staff ADD FOREIGN KEY(id) REFERENCES community_moderator (id)
ALTER TABLE publication ADD FOREIGN KEY(profileId) REFERENCES community (profileId)
ALTER TABLE publication ADD FOREIGN KEY(id) REFERENCES post (id)
ALTER TABLE reply ADD FOREIGN KEY(id) REFERENCES post (id)
ALTER TABLE reply ADD FOREIGN KEY(id) REFERENCES comment (id)
ALTER TABLE rating ADD FOREIGN KEY(id) REFERENCES post (id)
ALTER TABLE rating ADD FOREIGN KEY(id) REFERENCES likes (id)
ALTER TABLE assessment ADD FOREIGN KEY(id) REFERENCES comment (id)
ALTER TABLE assessment ADD FOREIGN KEY(id) REFERENCES comment_likes (id)
ALTER TABLE dialog ADD FOREIGN KEY(id) REFERENCES comment (id)
ALTER TABLE dialog ADD FOREIGN KEY(postId) REFERENCES comment_reply (postId)
