CREATE TABLE "snippet" (
	"id" text PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"code" text NOT NULL,
	"language" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
