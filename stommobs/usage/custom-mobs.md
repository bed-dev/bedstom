# Creating Custom Mobs

Learn how to define, register, and spawn your own custom mob AIs using Java Builders or the Kotlin DSL.

> For full details on `MobStats`, `GoalFactory`, and `Lifecycle Hooks`, see the [Profile API](/stommobs/api/profiles).

## Full Example

::: code-group

```kotlin [Kotlin DSL]
import net.minestom.server.coordinate.Pos
import net.minestom.server.entity.EntityType
import net.minestom.server.event.Event
import net.minestom.server.event.EventNode
import net.minestom.server.instance.Instance
import codes.bed.minestom.mobs.StomMobs
import codes.bed.minestom.mobs.ai.pathfinding.PathingPresets
import codes.bed.minestom.mobs.api.MobStats
import codes.bed.minestom.mobs.dsl.mobProfile
import codes.bed.minestom.mobs.dsl.spawnDsl
import codes.bed.minestom.mobs.dsl.spawnMob

fun customMobUsage(node: EventNode<Event>, instance: Instance) {
    val spawner = StomMobs.spawnerWithVanillaProfiles(node)

    // Build custom profile using DSL
    val hunter = mobProfile("custom:hunter", EntityType.SKELETON) {
        stats(
            MobStats(
                baseHealth = 24.0,
                healthPerLevel = 4.0,
                baseAttack = 6.0,
                attackPerLevel = 1.0,
                baseMoveSpeed = 0.25,
                speedPerLevel = 0.01,
                baseArmor = 2.0,
                armorPerLevel = 0.2,
                baseFollowRange = 34.0,
                followRangePerLevel = 0.25
            )
        )
        pathing(
            PathingPresets.hostileMelee(
                speed = 1.55,
                attackDelay = 16,
                searchRange = 34.0
            )
        )
    }

    spawner.register(hunter)

    // Spawn using DSL helper
    spawner.spawnMob(hunter, instance, Pos(10.0, 42.0, 10.0), level = 7)
}
```

```java [Java Builder]
import net.minestom.server.coordinate.Pos;
import net.minestom.server.entity.EntityType;
import net.minestom.server.event.Event;
import net.minestom.server.event.EventNode;
import net.minestom.server.instance.Instance;
import codes.bed.minestom.mobs.StomMobs;
import codes.bed.minestom.mobs.ai.pathfinding.PathingPresets;
import codes.bed.minestom.mobs.api.MobStats;
import codes.bed.minestom.mobs.builder.MobProfileBuilder;
import codes.bed.minestom.mobs.builder.MobSpawnBuilder;
import codes.bed.minestom.mobs.spawn.MobSpawner;

public final class CustomMobUsage {
    public static void run(EventNode<Event> node, Instance instance) {
        MobSpawner spawner = StomMobs.spawnerWithVanillaProfiles(node);

        // Build custom AI
        var berserker = MobProfileBuilder.create("custom:berserker", EntityType.ZOMBIFIED_PIGLIN)
            .stats(new MobStats(
                30.0, 5.0,
                8.0, 1.6,
                0.27, 0.012,
                4.0, 0.35,
                28.0, 0.3
            ))
            .applyPathing(PathingPresets.hostileMelee(1.8, 12, 32.0, true, entity -> true))
            .build();

        spawner.register(berserker);

        // Spawn using Builder
        MobSpawnBuilder.create(spawner)
            .profile(berserker)
            .instance(instance)
            .position(new Pos(12, 42, 12))
            .level(10)
            .spawn();
    }
}
```

:::

