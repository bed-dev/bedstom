---
title: Introduction
description: "A focused library for advanced mob spawning and AI management in Minestom."
---

# Introduction

## Why StomMobs?

`stommobs` is designed to be lightweight yet powerful, filling the gap for mob management in Minestom servers. It provides:

- A clean `MobSpawner` runtime with profile registration and active tracking.
- Reusable AI/pathfinding presets built on Minestom goal/target selectors.
- Java-friendly Builders for custom profiles and spawn requests.
- Kotlin DSLs for concise custom AI assembly and spawning.
- Ready-to-use vanilla-like profiles for common gameplay scenarios.

## Core Building Blocks

- **`MobSpawner`**: Owns profile registration, spawn operations, and active mob tracking.
- **`MobProfile`**: Immutable mob blueprint (entity type, stats, goals, targets, hooks).
- **`MobStats`**: Level-scaled combat and movement values.
- **Pathing Presets**: Reusable AI movement/targeting presets for hostile or passive behavior.

## Typical Workflow

1. Create a spawner from your `EventNode<Event>`.
2. Register built-in vanilla profiles and/or your own custom profiles.
3. Spawn mobs by profile id or profile object.
4. Apply destination/follow behavior when needed.

## Key Features

### [Mob Profiles](/stommobs/usage/custom-mobs)
Define custom mob behavior, pathfinding, and combat stats in a single profile.

### [Pathfinding Presets](/stommobs/pathfinding)
Use built-in presets for wandering, following, and aggressive behavior.

### [Java & Kotlin Friendly](/stommobs/usage/custom-mobs)
Whether you use Java Builders or Kotlin DSL, the API is intuitive and type-safe.

### [Vanilla Mobs](/stommobs/vanilla-profiles)
Spawn pre-configured vanilla mobs instantly to test your server.

## Installation

Ready to start spawning mobs? Jump to the installation guide.

### [Installation](/stommobs/getting-started/installation)
Add the dependency to your Gradle project.
