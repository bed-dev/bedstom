# Pathfinding & Movement

StomMobs implements a robust A* pathfinding system integrated directly with Minestom's navigation features. It is designed to be performant while supporting complex movement behaviors like ladder climbing, water navigation, and ledge dropping.

## Core Concepts

The pathfinding system consists of three main components:

1.  **Node Generator**: Evaluates surrounding blocks to determine valid movement options.
2.  **Path Follower**: Executes the calculated path by controlling the mob's velocity and jump actions.
3.  **Hazard Policy**: Filters out dangerous blocks (lava, fire, sweet berries) to prevent suicide.

When you use `PathingPresets`, these components are automatically configured for your mob.

## Presets

The library provides two primary presets that cover most use cases.

### Hostile Melee

Optimized for zombies, husks, and other aggressive melee attackers.

```kotlin
PathingPresets.hostileMelee(
    speed = 1.0,           // Movement speed multiplier
    attackDelay = 20,      // Ticks between attacks
    searchRange = 32.0,    // Block radius to scan for targets
    lineOfSight = true,   // Require line of sight to target?
    targetSelector = { it is Player } // Predicate for valid targets
)
```

**Features:**
- **Smart Targeting**: Prioritizes nearest valid target.
- **Ledge Dropping**: Will drop down ledges up to `maxDropHeight`.
- **Trapdoor Handling**: Jumps over or walks on trapdoors correctly.
- **Ladder/Vine Climbing**: If enabled in profile stats.

### Passive Wander

Optimized for animals and ambient mobs.

```kotlin
PathingPresets.passiveWander(
    speed = 0.8,
    minWait = 40,    // Min ticks to wait between wanders
    maxWait = 100    // Max ticks to wait
)
```

## Movement Capabilities

StomMobs supports advanced traversal options that can be toggled per-profile.

### Ladder Climbing
Mobs can detect and climb ladders or vines. This is crucial for navigating vertical structures.
*   **Behavior**: When a path node is on a ladder, the mob will move vertically to reach the next node.
*   **Configuration**: Enabled via `MobProfile` or `PathingPresets`.

### Water Navigation
Mobs can swim upwards or across water.
*   **Behavior**: Applies upward velocity when submerged to prevent drowning and cross water bodies.

### Ledge Dropping
Standard Minestom mobs often get stuck on 1-block ledges. StomMobs allows mobs to confidently drop down.
*   **Limit**: Controlled by `maxDropHeight` (default is usually 3-4 blocks safe fall distance).

### Jump & Parkour
The node generator injects aggressive jump nodes for:
*   1-block high obstacles.
*   Bottom-half trapdoors.
*   Fences/Walls (if jumping is physically possible).

## Hazard Avoidance

The `HazardPolicy` determines which blocks are "unsafe".

### Default Hazards
By default, the following are avoided:
- `lava`
- `fire`
- `sweet_berry_bush`
- `magma_block`
- `campfire`

### Customizing Hazards

You can modify the global policy or creating custom policies.

::: code-group

```kotlin [Kotlin]
import codes.bed.minestom.mobs.ai.pathfinding.PathingPresets

// Allow walking on magma blocks (e.g. for Nether mobs)
PathingPresets.defaultHazardPolicy.removeToken("magma_block")

// Add a new hazard to avoid
PathingPresets.defaultHazardPolicy.addToken("wither_rose")
```

```java [Java]
import codes.bed.minestom.mobs.ai.pathfinding.PathingPresets;

// Allow walking on magma blocks
PathingPresets.defaultHazardPolicy.removeToken("magma_block");

// Add wther rose as hazard
PathingPresets.defaultHazardPolicy.addToken("wither_rose");
```

:::

## Performance & Optimization

The pathfinding engine includes several optimizations:
- **Path Caching**: Paths are cached for a short duration to avoid recalculating A* every tick.
- **Distance Checks**: Target acquisition uses squared distance checks to avoid expensive square root operations.
- **Async Calculation**: (Planned) Path calculation can be offloaded to parallel threads.

## Debugging

To visualize pathfinding in development:
1.  Enable debug mode (if available in your test setup).
2.  Particles will spawn along the calculated path nodes.
3.  Green particles = valid path; Red particles = unreachable target.

